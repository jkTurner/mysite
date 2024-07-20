"use client"
import styles from './navlink.module.css'
import Link from 'next/link';
import { Route } from '@/app/lib/Paths';
import { usePathname } from "next/navigation";
import { capitalAll } from '@/app/lib/utils';

interface NavlinkProps {
    item: Route;
}

const Navlink = ({item}: NavlinkProps) => {
    const pathName = usePathname();

    return (
        <div className="">
            <Link
                href={item.path}
                className={`${styles.link_container} ${pathName === item.path && styles.active}`}
                >{capitalAll(item.name)}</Link>
        </div>
    )
}

export default Navlink;

