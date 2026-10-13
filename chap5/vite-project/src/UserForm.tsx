import { useActionState, useState } from"react";
import type { UserType } from"./Home";
import { usersData } from"./UserData";

export default function UserForm() {
const [users, setUsers] = useState(usersData);
const [_formState, action, isPending] = useActionState(
async (_previousArgs: UserType, formData: FormData) => {
const user: UserType = {
userId: Number(formData.get("userId")?.toString() || 0),
id: Number(formData.get("id")?.toString() || 0),
title: formData.get("title")?.toString() || "",
body: formData.get("body")?.toString() || "",
      };
await new Promise((res) => {
setTimeout(() => {
          usersData.push(user);
setUsers(usersData);
res(null);
        }, 1000);
      });
return user;
    },
    {
userId: 0,
id: 0,
title: "",
body: "",
    }
)};