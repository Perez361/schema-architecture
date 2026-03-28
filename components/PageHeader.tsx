import Link from "next/link";

interface Props {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: Props) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <ol className="breadcrumb">
        <li><Link href="/">Home</Link></li>
        <li className="breadcrumb-sep">{breadcrumb}</li>
      </ol>
    </div>
  );
}
