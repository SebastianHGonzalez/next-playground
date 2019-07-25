import Link from "next/link";

const Index = () => (
    <div>
        <ul>
            <Link href="/layout">
                <li>
                    <a>

                        layout demo
                </a>
                </li>
            </Link>
            <Link href="/pin">
                <li>
                    <a>

                        keypad demo
</a>
                </li>
            </Link>
            <Link href="/steps">
                <li>
                    <a>

                        step indicator demo
                </a>

                </li>
            </Link>
        </ul>
        <p>Hello Next.js</p>
    </div>
);

export default Index;
