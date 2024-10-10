"use client";

import { createPost } from "../actions/action";

export default function Form() {
  return (
    <form action={createPost}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
