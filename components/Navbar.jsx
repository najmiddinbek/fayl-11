import Link from "next/link";
import Image from "next/image";
import Logotip from "../public/mdm++++ (2).png"

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/users", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};


export default async function Navbar() {
    const a = await getTopics()
    const topics = a?.topics
    return (
        <div className="green">
            <div className="max-w-[1400px]  mx-auto">
                <nav className="flex justify-between items-center">
                    <Link href={"/pupilsAdd"}>
                        <Image src={Logotip} width={100} height={100} alt="
                    Image" />
                    </Link>
                    <Link className="text-white" href={"/pupilsAdd"}>
                        O`quvchi qo`shish
                    </Link>
                    <Link className="text-white" href={"/register"}>
                        Ro`yxatdan o`tish
                    </Link>
                    <Link className="text-white" href={"/"}>
                        Login
                    </Link>
                </nav>
                {/* {topics.map((topic, index) => (
                <h1>{topic.name}</h1>
            ))} */}
            </div>
        </div>
    );
}
