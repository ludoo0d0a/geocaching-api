
// geocacheTypes - 
enum GeocacheTypes {
  
  // Traditional
  Traditional = 2,
  // Multi-Cache
  MultiCache = 3,
  // Virtual
  Virtual = 4,
  // Letterbox Hybrid
  LetterboxHybrid = 5,
  // Event
  Event = 6,
  // Mystery/Unknown
  MysteryUnknown = 8,
  // Project A.P.E.
  ProjectAPE = 9,
  // Webcam
  Webcam = 11,
  // Locationless (Reverse) Cache
  LocationlessReverseCache = 12,
  // Cache In Trash Out Event
  CacheInTrashOutEvent = 13,
  // Earthcache
  Earthcache = 137,
  // Mega-Event
  MegaEvent = 453,
  // GPS Adventures Exhibit
  GPSAdventuresExhibit = 1304,
  // Wherigo
  Wherigo = 1858,
  // Community Celebration Event
  CommunityCelebrationEvent = 3653,
  // Geocaching HQ
  GeocachingHQ = 3773,
  // Geocaching HQ Celebration
  GeocachingHQCelebration = 3774,
  // Geocaching HQ Block Party
  GeocachingHQBlockParty = 4738,
  // Giga-Event
  GigaEvent = 7005,
}


// geocacheStates - 
enum GeocacheStates {
  
  // Unpublished
  Unpublished = 1,
  // Active
  Active = 2,
  // Disabled
  Disabled = 3,
  // Locked
  Locked = 4,
  // Archived
  Archived = 5,
}


// geocacheSizes - 
enum GeocacheSizes {
  
  // Unknown
  Unknown = 1,
  // Micro
  Micro = 2,
  // Small
  Small = 8,
  // Regular
  Regular = 3,
  // Large
  Large = 4,
  // Virtual
  Virtual = 5,
  // Other
  Other = 6,
}


// geocacheLogTypes - 
enum GeocacheLogTypes {
  
  // Found It
  FoundIt = 2,
  // Didn&#39;t find it
  DidnTFindIt = 3,
  // Write note
  WriteNote = 4,
  // Archive
  Archive = 5,
  // Permanently Archived
  PermanentlyArchived = 6,
  // Needs Archived
  NeedsArchived = 7,
  // Will Attend
  WillAttend = 9,
  // Attended
  Attended = 10,
  // Webcam Photo Taken
  WebcamPhotoTaken = 11,
  // Unarchive
  Unarchive = 12,
  // Temporarily Disable Listing
  TemporarilyDisableListing = 22,
  // Enable Listing
  EnableListing = 23,
  // Publish Listing
  PublishListing = 24,
  // Retract Listing
  RetractListing = 25,
  // Needs Maintenance
  NeedsMaintenance = 45,
  // Owner Maintenance
  OwnerMaintenance = 46,
  // Update Coordinates
  UpdateCoordinates = 47,
  // Post Reviewer Note
  PostReviewerNote = 68,
  // Announcement
  Announcement = 74,
}


// trackableLogTypes - 
enum TrackableLogTypes {
  
  // Write Note
  WriteNote = 4,
  // Retrieve It from a Cache
  RetrieveItFromACache = 13,
  // Dropped Off
  DroppedOff = 14,
  // Transfer
  Transfer = 15,
  // Mark Missing
  MarkMissing = 16,
  // Grab It (Not from a Cache)
  GrabItNotFromACache = 19,
  // Discovered It
  DiscoveredIt = 48,
  // Move to Collection
  MoveToCollection = 69,
  // Move to Inventory
  MoveToInventory = 70,
  // Visited
  Visited = 75,
}


// listTypes - 
enum ListTypes {
  
  // Pocket Query (pq)
  PocketQueryPq = 1,
  // Bookmark (bm)
  BookmarkBm = 2,
  // Ignore (il)
  IgnoreIl = 3,
  // Watch (wl)
  WatchWl = 4,
  // Favorites (fl)
  FavoritesFl = 5,
}


// membershipTypes - 
enum MembershipTypes {
  
  // Unknown
  Unknown = 0,
  // Basic
  Basic = 1,
  // Charter
  Charter = 2,
  // Premium
  Premium = 3,
}


// additionalWaypointTypes - 
enum AdditionalWaypointTypes {
  
  // Parking Area
  ParkingArea = 217,
  // Virtual Stage
  VirtualStage = 218,
  // Physical Stage
  PhysicalStage = 219,
  // Final Location
  FinalLocation = 220,
  // Trailhead
  Trailhead = 221,
  // Reference Point
  ReferencePoint = 452,
}

