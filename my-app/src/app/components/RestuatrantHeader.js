import Link from "next/link";

export default function RestuatrantHeader() {
    return (
        <>
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <div class="text-2xl font-bold">
                        <a href="#" class="text-gray-800">Logo</a>
                    </div>
                    <nav>
                        <ul class="flex space-x-6">
                            <li>
                                <Link href="/" class="text-gray-600 hover:text-gray-900">Home</Link>
                            </li>
                            <li>
                                <Link href="/" class="text-gray-600 hover:text-gray-900">Login/SignUp</Link>
                            </li>
                            <li>
                                <Link href="/" class="text-gray-600 hover:text-gray-900">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}