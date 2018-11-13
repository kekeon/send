
import Home from '../features/Home.jsx'
/*import Operation from "../components/Operation"
import OperationRecord from "../components/OperationRecord"*/


function Operation(){
    return <h3>Operation</h3>;
}

function OperationRecord(){
    <h3>Bus</h3>;
    return <h3>OperationRecord</h3>;
}

export const routes = [
    {
        path: "/main",
        component: Home,
        routes: [
            {
                path: "/main/operation",
                component: Operation
            },
            {
                path: "/main/operation-record",
                component: OperationRecord
            }
        ]
    }
];
