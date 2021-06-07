import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'
import Heading from '../../../components/elements/heading';

// partials
import ProductList from '../../../components/partials/product/productList'


const ProductsList = () => {
    const {t} = useTranslation("product")
    const router = useRouter()
    const { category } = router.query

    const pathBreadCumb = [{
        'path' : '/products',
        'name' : `${t("Products")}`
    },{
        'path' : `/products/${category}`,
        'name' : t(category)
    }]

    return (
        <div className="product-list">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t("List Of Products")} />
                <p className="sub-heading text-center fw-bold">
                    {t(category)}
                </p>
            </div>
            <section className="d-flex justify-content-center container-fluid px-5">
                <ProductList t={t} />
            </section>
        </div>
    )
}

export default ProductsList