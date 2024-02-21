import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>01.01.2022</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
