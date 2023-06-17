import Link from "next/link"

function DashboardHome() {
    return (
        <div>
            Welcome to shop list!

            <p>Hello Ankush!</p>

            <ul>
                <li>Home</li>

                <li>
                    <Link href="/dashboard/products">Products</Link>
                </li>

                <li>
                    <Link href="/dashboard/orders">Orders</Link>
                </li>

                <li>
                    <Link href="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default DashboardHome