import { allProjects, Post as PostType } from ".contentlayer/generated";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostProps = {
  post: PostType;
  related: PostType[];
};

export default function Project({ params }: { params: any }) {
  // const post = allPosts.find((post) => post.slug === params.slug);
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="single-pages mx-auto max-w-3xl">
      <div className="flex flex-col gap-20">
        <article>
          <div className="flex flex-col gap-3 animate-in">
            <div className="flex gap-3 text-secondary">
              <p>{post.time}</p>
              {post.url && (
                <>
                  <span>&middot;</span>
                  <Link
                    href={post.url}
                    className="transition hover:text-primary"
                  >
                    Visit Extracurricular
                  </Link>
                </>
              )}
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-secondary">
              {post.title}
            </h1>
            <p
              className="text-lg leading-tight text-slate-300 animate-in md:text-xl"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              {post.description}
            </p>
          </div>

          <div className="h-12" />
          <div
            className="extracurricular prose animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <div
              className="[&>*]:mb-3] flex flex-col items-center justify-center gap-10 text-lg text-white [&>*:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: post.body.raw }}
            />
          </div>
        </article>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-white">Tags</h2>
            <div className="flex flex-wrap gap-3 ">
              {post.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="capitalize sm:text-base"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Link href="/" className="text-slate-300 underline">
            ← All Projects
          </Link>
        </div>

        <div />
      </div>
    </div>
  );
}
