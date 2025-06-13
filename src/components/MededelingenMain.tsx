import React, { useState, useMemo } from 'react'
import ContainerTitle from './ContainerTitle'
import Image from 'next/image'
import moskee from '@/assets/images/sfeerbeeld-1.webp';

const MededelingenMain = () => {
  const announcements = [
    { id: '1', title: 'Nieuwe workshops zomer 2025', body: 'Deze zomer organiseren we een reeks creatieve workshops voor jong en oud...', date: '2025-06-10', imageUrl: '/images/sfeer-1.webp' },
    { id: '2', title: 'Culturele avond met muziek en poëzie', body: 'Op vrijdag 21 juni nodigen we jullie uit voor een avond vol cultuur...', date: '2025-06-05', imageUrl: '/images/avond-cultuur.jpg' },
    { id: '3', title: 'Update COVID-19 maatregelen', body: 'Lees hier de laatste update omtrent COVID-19 regels...', date: '2025-05-30', imageUrl: '/images/covid-update.jpg' },
    { id: '4', title: 'Nieuwe openingstijden zomer', body: 'In de zomer zijn we geopend van 9u tot 18u...', date: '2025-06-01', imageUrl: '/images/openingstijden.jpg' },
    { id: '5', title: 'Vrijwilligers gezocht voor festival', body: 'Wil je meehelpen op het zomerfestival? Meld je aan!', date: '2025-06-08', imageUrl: '/images/festival.jpg' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [dateFilter, setDateFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 3
  const now = new Date()

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((a) => {
      const searchMatch =
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.body.toLowerCase().includes(searchTerm.toLowerCase())

      if (!searchMatch) return false

      if (dateFilter === 'week') {
        const oneWeekAgo = new Date(now)
        oneWeekAgo.setDate(now.getDate() - 7)
        return new Date(a.date) >= oneWeekAgo
      }

      if (dateFilter === 'month') {
        const oneMonthAgo = new Date(now)
        oneMonthAgo.setMonth(now.getMonth() - 1)
        return new Date(a.date) >= oneMonthAgo
      }

      return true
    })
  }, [searchTerm, dateFilter, announcements, now])

  const totalPages = Math.ceil(filteredAnnouncements.length / itemsPerPage)
  const paginatedAnnouncements = filteredAnnouncements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ContainerTitle link={'/mededelingen'} title={'mededelingen'} />

      <div className="container">
        <div className="search-filter-wrapper">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Zoek mededelingen..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              aria-label="Zoek mededelingen"
              className="search-input"
            />
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </div>

          <select
            value={dateFilter}
            onChange={(e) => {
              setDateFilter(e.target.value)
              setCurrentPage(1)
            }}
            aria-label="Filter op datum"
            className="select-filter"
          >
            <option value="all">Alle datums</option>
            <option value="week">Afgelopen week</option>
            <option value="month">Afgelopen maand</option>
          </select>
        </div>

        {paginatedAnnouncements.length === 0 && <p>Geen mededelingen gevonden.</p>}

        <div>
          {paginatedAnnouncements.map((a) => (
            <a
              key={a.id}
              href={`/mededelingen/${a.id}`}
              className={`announcement-link ${hoveredId === a.id ? 'hover' : ''}`}
              onMouseEnter={() => setHoveredId(a.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex-container">
                <div className="image-wrapper">
                  <Image
                  src={moskee}
                  alt={a.title}
                  className={`announcement-image ${hoveredId === a.id ? 'hover' : ''}`}
                />
                </div>
                
                <div>
                  <h2 className="title">{a.title}</h2>
                  <p className="date">{new Date(a.date).toLocaleDateString('nl-BE')}</p>
                  <p className="body">{a.body}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="pagination-wrapper" aria-label="Paginering mededelingen">
            <button
              className="page-button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              aria-label="Vorige pagina"
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1
              return (
                <button
                  key={pageNum}
                  className={`page-button ${currentPage === pageNum ? 'active' : ''}`}
                  onClick={() => goToPage(pageNum)}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                  aria-label={`Pagina ${pageNum}`}
                >
                  {pageNum}
                </button>
              )
            })}

            <button
              className="page-button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              aria-label="Volgende pagina"
            >
              &gt;
            </button>
          </nav>
        )}
      </div>
    </>
  )
}

export default MededelingenMain
