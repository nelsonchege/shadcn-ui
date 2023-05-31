import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="grid grid-cols-4 gap-12">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1" key={id}>
            <Skeleton className="w-full h-2/3 rounded-md mb-1"></Skeleton>
            <Skeleton className="h-6 w-1/2 mb-1"></Skeleton>
            <Skeleton className="h-6 w-1/4"></Skeleton>
          </div>
        ))}
      </div>
    </main>
  );
}
