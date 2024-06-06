import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { ContractListItem } from "@/components/ContractListItem";
import { PageSEO } from "@/components/SEO";
import { getProject, LocalContract, Project } from "@/services/ProjectService";

const Explorer: NextPage = () => {
    const router = useRouter();
    const { page } = router.query;

    let project: Project | undefined;
    if (page) {
        project = getProject(page as string);
    }

    const contractListItems = project?.contracts.map(
        (contract: LocalContract) => (
            <ContractListItem key={contract.name} contract={contract} />
        )
    );

    return (
        <div>
            <PageSEO />

            <div className="p-2">
                <h2 className="text-3xl mt-5 font-semibold fade-in-text">
                    {project?.name}
                </h2>

                <div className="mx-auto flex items-center justify-center mt-10 fade-in-1s">
                    <Image
                        className="dark:p-1 dark:bg-white dark:rounded"
                        src={"/" + project?.logoPath}
                        alt={project?.name ?? ""}
                        width={project?.width ?? 160}
                        height={project?.height ?? 300}
                        priority
                    />
                </div>

                <div className="mx-auto flex items-center justify-center">
                    <table className="border-separate border-spacing-y-1 md:border-spacing-y-4 mt-5 fade-in-1s dark:text-white">
                        <tbody>{contractListItems}</tbody>
                    </table>
                </div>

                <div className="mx-auto max-w-2xl mt-6 flex flex-auto flex-col justify-between fade-in-text">
                    <div className="text-lg leading-8 text-center text-gray-900 dark:text-gray-100">
                        {project?.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explorer;
