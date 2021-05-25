import { useSelector } from "react-redux"

const Counter = () => {
    const count = useSelector((state: any) => state?.counter?.count)
    return (
        <div>
            {count}
        </div>
    )
}

export default Counter


// import { useSelector } from "react-redux"
// import { connect } from "react-redux"

// interface Props {
//     count: number
// }

// const Counter = ({ count }: Props) => {
//     return (
//         <div>
//             {count}
//         </div>
//     )
// }

// const mapStateToProps = (state: any) => ({
//     count: state?.counter?.count
// })

// export default connect(mapStateToProps)(Counter)