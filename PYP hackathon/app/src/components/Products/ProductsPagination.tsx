import * as React from 'react'
interface IProps {
    arr: any[];
}

export const ProductsPaginationItem: React.FC<IProps> = ({ arr }): any => {
    console.log(arr)
    return (arr.map((d: number) => {
        return (<li key={d} className="page-item"><a className="page-link" href={`http://server/..../page?=${d}`}>{d}</a></li>)
    }
    ))

}

