import Link from 'next/link';

import styles from './backHomeLinkButton.module.css';


function BackHomeLinkButton({
  backHomeLink,
  backHomeLinkText
}: { backHomeLink: string; backHomeLinkText: string; }) {

  return (
    <Link href={backHomeLink} className={styles.linkButton} >
      {backHomeLinkText}
    </Link>
  );
};

export default BackHomeLinkButton;
