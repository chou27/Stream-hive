import { redirect } from "next/navigation";
import { Results, ResultsSkeleton } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
    searchParams?: Promise<{
        term?: string;
    }>;
};

const SearchPage = async (props: SearchPageProps) => {
    const searchParams = await props.searchParams;
    // Optional chaining to safely access term
    const term = searchParams?.term;

    // Redirect if term is missing
    if (!term) {
        redirect("/");
    }

    return (
        <div className="h-full p-8 max-w-screen-2xl mx-auto">
            <Suspense fallback={<ResultsSkeleton />}>
                <Results term={term} />
            </Suspense>
        </div>
    );
};

export default SearchPage;
