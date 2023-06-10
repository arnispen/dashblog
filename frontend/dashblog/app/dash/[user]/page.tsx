export default async function UserDash({ params }: any) {
    return (
        <div className="">
            <h1>{params.user}</h1>
        </div>
    )
}