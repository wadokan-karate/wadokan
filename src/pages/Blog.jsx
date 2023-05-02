import Cardblog from "../components/Cardblog";
import CardResource from "../components/CardResource";
import '../style/Blog.css'

const Blog = () => {

    return (
        <>
        <div id="banner">
            <h1 className="h1Blog">NOTICIAS</h1></div>
            <Cardblog/>
        <div id="banner" >
            <h1 className="h1Blog">RECURSOS</h1></div>
            <CardResource/>
        </>
    );
};

export default Blog;