
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CategoriesTable } from "@/components/Tables/categories/categoriesTable";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tables",
};

const TablesPage = () => {
    return (
        <>
            <Breadcrumb pageName="Categories" />

            <div className="space-y-10">
                <CategoriesTable />
            </div>
        </>
    );
};

export default TablesPage;
