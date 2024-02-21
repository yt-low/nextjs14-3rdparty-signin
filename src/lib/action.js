"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      userId,
      slug,
    });
    await newPost.save();
    console.log("save to DB");
    revalidatePath("/blog"); // make blog page always fetch latest data
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("delete post from DB");
    revalidatePath("/blog"); // make blog page always fetch latest data
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogOut = async () => {
  await signOut();
};

export const handleRegisterWithCredentials = async (prevState, formData) => {
  const { username, email, password, passwordrepeat, img } =
    Object.fromEntries(formData);

  try {
    if (username === "") {
      return { error: "Please enter username" };
    }

    if (email === "") {
      return { error: "Please enter email" };
    }

    if (password === "") {
      return { error: "Please enter password" };
    }

    if (passwordrepeat === "") {
      return { error: "Please repeat password" };
    }

    if (password !== passwordrepeat) {
      return { error: "Password doesn't match" };
    }

    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "This username already been registered." };
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashpassword,
      img,
    });
    await newUser.save();
    return { success: "Registered new user" };
  } catch (error) {
    return { error: "Unable to register new user" };
  }
};

export const handleLoginWithCredentials = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    signIn("credentials", { username, password });
  } catch (err) {
    console.log(err.message);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
/*
export const handleLoginWithCredentials = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username & password" };
    }
    console.log(error)
    throw("Unable to login with credentials - action.js");
  }
};
*/