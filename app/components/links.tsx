import Link from "next/link"


type ButtonProps = {
   path: string;
   className?: string;
   children: React.ReactNode;
   label?: string;
}

export default function Button({className, path, children, label }: ButtonProps) {

   return (
      <Link href={path} className={className} {...(label ? { "aria-label": label } : {})}>{children}</Link>
   )
}