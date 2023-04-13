import Cardblog from "../components/Cardblog";
import '../style/Blog.css'

const Blog = () => {

    return (
        <>
        <div id="banner">
            <h1 className="h1Blog">RECURSOS</h1></div>
            <Cardblog/>
        <div id="banner" ><h1 className="h1Blog">NOTICIAS</h1></div>
            {/* <Cardblog/> */}
        </>
    );
};

export default Blog;