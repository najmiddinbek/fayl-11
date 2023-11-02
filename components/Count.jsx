const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

export default async function Count() {
    const a = await getTopics()
    const topiclar = a?.topiclar
    const [topicCount, setTopicCount] = useState(0);

    return (
        <div className="red-circle">
            <span>{topicCount}</span>
        </div>
    )
}
