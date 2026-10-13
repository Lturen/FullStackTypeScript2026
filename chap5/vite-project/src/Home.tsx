export type UserType = {
userId: number;
id: number;
title: string;
body: string;
};

interface HomeProps {
users?: UserType[];
}

export default function Home({ users }: HomeProps) {
return (
<div>
{users?.map((user) => (
<div key={user.id}>
<h3>{user.title}</h3>
<p>{user.body}</p>
</div>
))}
</div>
);
}