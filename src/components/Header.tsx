export interface HeaderProps {
    text: string;
}

export default function Header ( { text }: HeaderProps ) {
    return <header><h1>{ text }</h1></header>;
}