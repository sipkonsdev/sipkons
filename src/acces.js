const access = {
  edit_project: [
    'kepala_suku_dinas_prkp', 
    'authenticated'
  ],
  add_project: [
    'kepala_suku_dinas_prkp', 
    'authenticated'
  ],
  rm_project: [
    'kepala_suku_dinas_prkp', 
    'authenticated'
  ],
  add_activity: [
    'authenticated',
    'kepala_suku_dinas_prkp',
    'kepalas_seksi_perencanaan_pengawasan_pkp',
    'kontraktor_pelaksana'
  ],
  add_meeting: [
    'authenticated',
    'kepala_suku_dinas_prkp',
    'kontraktor_pelaksana',
    'konsultan_pengawas',
  ],
  approve_konsultan: [
    'konsultan_pengawas',
  ],
  approve_kasi: [
    'kepalas_seksi_perencanaan_pengawasan_pkp',
  ],
  approve_kasudin: [
    'kepala_suku_dinas_prkp',
  ],
  reupload: [
    'authenticated',
    'kepala_suku_dinas_prkp',
    'kepalas_seksi_perencanaan_pengawasan_pkp',
    'kontraktor_pelaksana'
  ],
  add_notes: [
    'authenticated',
    'kepala_suku_dinas_prkp',
    'kepalas_seksi_perencanaan_pengawasan_pkp',
    'kontraktor_pelaksana',
    'konsultan_pengawas',
  ]

}

export default access