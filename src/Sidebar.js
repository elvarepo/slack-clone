import './Sidebar.css';
import React, { useState, useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import {InsertComment, Inbox, Drafts,BookmarkBorder,PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add} from '@material-ui/icons';
import db from './firebase';
import { useStateValue } from './StateProvider';
 
function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect (() => {
        db.collection('rooms').onSnapshot( snapshot => (
            setChannels(
                snapshot.docs.map( doc => ({
                    id:doc.id,
                    name: doc.data().name
            }))
            )
        ))
    },[])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className="sidebar__info">
                    <h2>Coding Programming</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
                <SidebarOption Icon={InsertComment} title='thread' />
                {/* <SidebarOption title="Youtube" /> */}
                <SidebarOption Icon={Inbox} title='Mentios & reactions' />
                <SidebarOption Icon={Drafts} title='Saved items' />
                <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
                <SidebarOption Icon={PeopleAlt} title='People & user groups' />
                <SidebarOption Icon={Apps} title='Apps' />
                <SidebarOption Icon={FileCopy} title='File brower' />
                <SidebarOption Icon={ExpandLess} title='Show less' />
                <hr />
                <SidebarOption Icon={ExpandMore} title='Channel' />
                <hr />
                <SidebarOption Icon={Add} addChannelOption title='Add Channel' />
                {channels.map( channel => (
                    <SidebarOption title={channel.name}
                    key={channel.id}
                    id={channel.id}
                    /> 
                ))}
        </div>
    )
}

export default Sidebar
