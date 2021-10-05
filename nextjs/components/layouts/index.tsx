import { Fragment, ReactNode } from 'react'
import Headers from '../headers'
import Footers from '../footer'
import style from './Layouts.module.css'
import Head from 'next/head'
interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
    metaContent: string;
}
export default function Layouts(props: LayoutProps) {
    const { children, pageTitle, metaContent } = props;
    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaContent} />
            </Head>
            <div className={style.container}>
                <Headers />
                <div className={style.content}>
                    {children}
                </div>
                <Footers />
            </div>
        </Fragment>
    )
}
