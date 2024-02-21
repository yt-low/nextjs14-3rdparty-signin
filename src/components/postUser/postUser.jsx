import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";

/* Fetch Datat using API
const getData = async (id) => {
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};
*/

export default async function PostUser({ userId }) {
  /* Fetch data using API
  const getUser = await getData(userId);
  */
  const user = await getUser(userId);
  return (
    <>
      {user.img && (
        <Image
          src={user.img}
          alt=""
          height="50"
          width="50"
          className={styles.avatar}
        />
      )}
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </>
  );
}
