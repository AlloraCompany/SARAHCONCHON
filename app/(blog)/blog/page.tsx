import { Suspense } from "react";
import PostList from "./post-list";

export default function Posts() {
  return (
    <div className="">
      <div className="w-full min-h-[25vh] bg-rose flex shadow-md shadow-rose/50">
        <h1 className="text-white container m-auto px-5 font-medium leading-none text-[clamp(1.25rem,0.55rem+2vw,3rem)]">
          <span className="font-bold">Dra. Sarah Conchon:</span> Saúde infantil
          e Endocrinologia
        </h1>
      </div>
      <main className="container mx-auto px-5">
        <h3 className="text-dark-green my-[4vh] font-semibold leading-none text-[clamp(1.25rem,0.45rem+1.125vw,2rem)]">
          Confira os posts mais recentes:
        </h3>
        <Suspense>
          <PostList />
        </Suspense>
      </main>
    </div>
  );
}
