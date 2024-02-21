import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description: "A website dedicated researching fundamental of KLSE companies.",
};

export default function About() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="https://images.pexels.com/photos/19594009/pexels-photo-19594009/free-photo-of-portrait-of-woman-in-jacket.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" fill />
      </div>
    </div>
  );
}
