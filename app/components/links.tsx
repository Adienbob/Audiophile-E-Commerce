import Link from "next/link"


type ButtonProps = {
   path: string;
   className?: string;
   children: React.ReactNode;
}

export default function Button({className, path, children }: ButtonProps) {


   return (
      <Link href={path} className={className}>{children}</Link>
   )
}