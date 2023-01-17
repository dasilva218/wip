import Link from "next/link";
import { useRouter } from "next/router";

function ActionLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "blue" : "orange",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={`href`} onClick={handleClick} style={style}>
      {children}
    </Link>
  );
}

export default ActionLink;
