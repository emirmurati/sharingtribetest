"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export async function createPost(formData: FormData) {
  await db.post.create({ data: { name: formData.get("name") as string } });

  revalidatePath("/");
}
