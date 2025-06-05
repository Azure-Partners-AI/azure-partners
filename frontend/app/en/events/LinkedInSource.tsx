import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Events.module.css";

interface Props {
  url: string;
}

const LinkedInSource = ({ url }: Props) => {
  return (
    <Link href={url} className={`${styles.link} ${styles.linkedin} inline-flex items-center gap-2`}>
      View on LinkedIn
      <FaLinkedin />
    </Link>
  );
};

export default LinkedInSource;
