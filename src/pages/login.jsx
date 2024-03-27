import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import LoginArea from "@containers/login";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Login = () => (
    <Wrapper>
        <SEO pageTitle="Loans" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Nuron Login" currentPage="Loans Againts NFTs" />
            <LoginArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Login;
