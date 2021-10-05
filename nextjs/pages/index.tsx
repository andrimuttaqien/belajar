import styles from '../styles/Home.module.css'
import Layouts from '../components/layouts'
import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
    return (
        <Fragment>
            <Layouts pageTitle="Home Page" metaContent="Aku Meta">
                <Image src="/vercel.svg" width={200} height={200} />
                <img src="/josh.jpg" style={{ width: 200, height: 200 }} />
                <h1 className={styles['title-home-page']}>Welcome Andri</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptas dicta voluptate quam, quasi quidem, ad quisquam pariatur nihil fugiat cumque totam. Autem soluta eum incidunt ipsum! Asperiores, autem eligendi?</p>
                <Image src="/vercel.svg" width={200} height={200} />
            </Layouts>
        </Fragment>
    )
}
