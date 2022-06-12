import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useHotkeys } from 'providers/Hotkeys';
import { IconMenu2 } from '@tabler/icons';
import ConfirmModal from 'components/ConfirmModal';
import StyledWrapper from './StyledWrapper';

const Sidebar = () => {
  const router = useRouter();
  const { searchNotebase } = useHotkeys();

  const gotoIndex = () => router.push(`/index`);
  const goToAllNotes = () => router.push(`/all`);
  const goToSearch = () => router.push(`/search`);
  const goToDailyNote = () => router.push(`/daily`);
  const goToGraph = () => router.push(`/graph`);
  const goToSettings = () => router.push(`/settings`);

  const toggleSidebar = () => {};

  return (
    <StyledWrapper className="pl-4 pr-4">
      <div className="flex mb-4">
        <div className="flex items-center py-3">
          🍁 <span className="font-medium relative notebase-name">journal</span>
        </div>
        <div className="flex flex-grow justify-end items-center py-3">
          <div>
            <IconMenu2 size={22} strokeWidth={1.5} className="cursor-pointer relative" onClick={toggleSidebar}/>
          </div>
        </div>
      </div>

      <nav className="flex flex-col">
        <a onClick={() => gotoIndex()} >
          📜 <span>Index</span>
        </a>
        <a onClick={() => searchNotebase()}>
          ➕ <span>Add Note</span>
        </a>
        <a onClick={() => goToDailyNote()}>
          📅 <span>Daily Notes</span>
        </a>
        <a onClick={() => goToAllNotes()} >
          📕 <span>All Notes</span>
        </a>
        <a onClick={() => goToSearch()} >
          🔎 <span>Search</span>
        </a>
        <a onClick={() => goToGraph()} >
          🕸️ <span>Graph</span>
        </a>
      </nav>
    </StyledWrapper>
  )
}

export default Sidebar;
