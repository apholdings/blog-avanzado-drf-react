import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";

function BlogPost({
}){
    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        get_blog()
    },[])

    return(
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(BlogPost)