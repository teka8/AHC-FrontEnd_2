import { createPortal } from "react-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight, CornerUpLeft, FileText, Folder, Image as ImageIcon, Music2, Video, X } from "lucide-react";

import Loader from "../components/Loader";
import SectionHeader from "../components/ui/SectionHeader";
import {
  GetPublicMediaParams,
  MediaFolder,
  MediaItem,
  MediaPreviewItem,
  useGetPublicMediaQuery,
} from "../features/media/mediaApi";

type MediaTypeFilter = "all" | "image" | "video" | "audio";

const TYPE_OPTIONS: MediaTypeFilter[] = ["all", "image", "video", "audio"];

const formatBytes = (bytes?: number | null) => {
  if (!bytes || bytes <= 0) return "";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const precision = unitIndex === 0 ? 0 : 1;
  return `${value.toFixed(precision)} ${units[unitIndex]}`;
};

const getPreviewSlots = (preview: MediaPreviewItem[]) => {
  const slots = Array.from({ length: 4 });
  return slots.map((_, index) => preview[index] || null);
};

export default function Media() {
  const resolveMediaUrl = useCallback(
    (value?: string | null) => {
      if (!value) {
        return "";
      }

      if (/^https?:\/\//i.test(value)) {
        return value;
      }

      if (value.startsWith("//")) {
        if (typeof window !== "undefined") {
          return `${window.location.protocol}${value}`;
        }

        return `https:${value}`;
      }

      if (value.startsWith("/")) {
        const assetBase = import.meta.env.VITE_ASSET_BASE_URL ?? import.meta.env.VITE_API_BASE_URL;

        if (assetBase) {
          try {
            return new URL(value, assetBase).toString();
          } catch (error) {
            return `${assetBase.replace(/\/+$/, "")}${value}`;
          }
        }

        if (typeof window !== "undefined") {
          return `${window.location.origin}${value}`;
        }
      }

      return value;
    },
    []
  );

  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  const [type, setType] = useState<MediaTypeFilter>("all");
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const queryParams = useMemo<GetPublicMediaParams | void>(() => {
    const params: GetPublicMediaParams = {};
    if (selectedFolder !== null) {
      params.folder = selectedFolder;
      params.page = page;
      params.per_page = 24;
    }
    if (type !== "all") {
      params.type = type;
    }

    return Object.keys(params).length ? params : undefined;
  }, [page, selectedFolder, type]);

  const { data, isFetching, isLoading } = useGetPublicMediaQuery(queryParams);

  const folders = data?.folders ?? [];
  const folderDetails = data?.folder ?? null;
  const mediaCollection = data?.media ?? null;
  const mediaItems = mediaCollection?.data ?? [];
  const mediaMeta = mediaCollection?.meta;
  const breadcrumbs = folderDetails?.breadcrumbs ?? [];
  const parentBreadcrumb = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : null;
  const isRoot = !folderDetails;

  useEffect(() => {
    if (selectedFolder === null) {
      setPage(1);
    }
  }, [selectedFolder]);

  useEffect(() => {
    if (mediaItems.length === 0) {
      setSelectedIndex(null);
      return;
    }

    if (selectedIndex !== null && selectedIndex >= mediaItems.length) {
      setSelectedIndex(mediaItems.length - 1);
    }
  }, [mediaItems, selectedIndex]);

  const handleFolderOpen = useCallback((folder: MediaFolder) => {
    setSelectedFolder(folder.id);
    setPage(1);
    setSelectedIndex(null);
  }, []);

  const handleBreadcrumbClick = useCallback(
    (index: number) => {
      if (!breadcrumbs.length) return;
      if (index >= breadcrumbs.length - 1) return;

      const target = breadcrumbs[index];
      setSelectedFolder(target.id);
      setPage(1);
      setSelectedIndex(null);
    },
    [breadcrumbs]
  );

  const goBackToRoot = () => {
    setSelectedFolder(null);
    setPage(1);
    setSelectedIndex(null);
  };

  const goPrev = useCallback(() => {
    if (!mediaItems.length) return;
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + mediaItems.length) % mediaItems.length;
    });
  }, [mediaItems.length]);

  const goNext = useCallback(() => {
    if (!mediaItems.length) return;
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % mediaItems.length;
    });
  }, [mediaItems.length]);

  const loading = isLoading && !data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgb(255, 253, 246)" }}>
      <div className="container py-12 md:py-16">
        <Helmet>
          <title>Media – AHC</title>
          <meta
            name="description"
            content="Explore the media gallery of the Africa Health Collaborative (AHC) at Addis Ababa University. Browse through images, videos, and audio files showcasing our health initiatives across Africa."
          />
          <meta
            name="keywords"
            content="AHC Media, Africa Health Collaborative Media, Health Initiatives Africa, Addis Ababa University Media, AHC Gallery, African Health Media"
          />
          <meta name="author" content="Africa Health Collaborative" />
          <meta property="og:title" content="AHC Media Gallery" />
          <meta
            property="og:description"
            content="Explore the media gallery of the Africa Health Collaborative (AHC) at Addis Ababa University. Browse through images, videos, and audio files showcasing our health initiatives across Africa."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ahc.tewostechsolutions.com/media" />
          <meta
            property="og:image"
            content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AHC Media Gallery" />
          <meta
            name="twitter:description"
            content="Explore the media gallery of the Africa Health Collaborative (AHC) at Addis Ababa University. Browse through images, videos, and audio files showcasing our health initiatives across Africa."
          />
          <meta
            name="twitter:image"
            content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
          />
        </Helmet>

        <SectionHeader eyebrow="Gallery" title="Media" />

        {loading ? (
          <Loader />
        ) : (
          <div className="space-y-10">
            {folderDetails ? (
              <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <button
                      type="button"
                      onClick={goBackToRoot}
                      className="inline-flex items-center gap-1 rounded-full border border-transparent bg-slate-100 px-3 py-1 font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      All media
                    </button>
                    {parentBreadcrumb && (
                      <button
                        type="button"
                        onClick={() => handleBreadcrumbClick(breadcrumbs.length - 2)}
                        className="inline-flex items-center gap-1 rounded-full border border-transparent bg-slate-100 px-3 py-1 font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
                      >
                        <CornerUpLeft className="h-4 w-4" />
                        Up one level
                      </button>
                    )}
                    {breadcrumbs.map((crumb, index) => (
                      <div key={crumb.id} className="flex items-center gap-2">
                        <span className="text-slate-300">/</span>
                        {index === breadcrumbs.length - 1 ? (
                          <span className="font-semibold text-slate-800">{crumb.name}</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleBreadcrumbClick(index)}
                            className="text-slate-600 transition hover:text-slate-900"
                          >
                            {crumb.name}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (parentBreadcrumb) {
                        handleBreadcrumbClick(breadcrumbs.length - 2);
                      } else {
                        goBackToRoot();
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-ahc-green/10 px-4 py-2 text-sm font-semibold text-ahc-green transition hover:bg-ahc-green/20"
                  >
                    <CornerUpLeft className="h-4 w-4" />
                    {parentBreadcrumb ? `Back to ${parentBreadcrumb.name}` : "Back to collections"}
                  </button>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{folderDetails.name}</h2>
                    {folderDetails.description && (
                      <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        {folderDetails.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                      Items: {folderDetails.media_count}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                      Subfolders: {folderDetails.children_count}
                    </span>
                  </div>
                </div>

                <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-inner">
                  {TYPE_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setType(option);
                        setPage(1);
                      }}
                      className={`rounded-full px-3 py-1 text-sm capitalize transition ${
                        type === option ? "bg-ahc-green text-black shadow" : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
                <p className="text-sm text-slate-600">
                  Step into our visual archive. Browse curated folders that capture moments from across the Africa Health Collaborative. Select a collection to open its window and explore every asset inside.
                </p>
              </div>
            )}

            <div className="space-y-10">
              <section>
                <header className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {isRoot ? "Media collections" : "Subfolders"}
                  </h3>
                  {isFetching && <span className="text-xs text-slate-400">Refreshing…</span>}
                </header>
                {folders.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {folders.map((folder) => (
                      <FolderCard
                        key={folder.id}
                        folder={folder}
                        onOpen={handleFolderOpen}
                        resolveUrl={resolveMediaUrl}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-sm text-slate-500">
                    {isRoot
                      ? "No media folders are available yet. Please check back soon."
                      : "This folder does not contain any subfolders."}
                  </div>
                )}
              </section>

              {folderDetails && (
                <section className="space-y-6">
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Media</h3>
                    {mediaMeta && mediaMeta.last_page > 1 && (
                      <div className="flex items-center gap-2 text-sm">
                        <button
                          type="button"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                          disabled={mediaMeta.current_page <= 1}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-slate-600 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Prev
                        </button>
                        <span className="text-xs text-slate-500">
                          Page {mediaMeta.current_page} of {mediaMeta.last_page}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPage((prev) => prev + 1)}
                          disabled={mediaMeta.current_page >= mediaMeta.last_page}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-slate-600 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300"
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </header>

                  {mediaItems.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {mediaItems.map((item, index) => (
                        <MediaTile
                          key={item.id}
                          media={item}
                          onClick={() => setSelectedIndex(index)}
                          resolveUrl={resolveMediaUrl}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-sm text-slate-500">
                      No media files found in this folder.
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>
        )}
      </div>

      {selectedIndex !== null && mediaItems.length > 0 && (
        <MediaPreviewModal
          items={mediaItems}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
          resolveUrl={resolveMediaUrl}
        />
      )}
    </div>
  );
}

function FolderCard({
  folder,
  onOpen,
  resolveUrl,
}: {
  folder: MediaFolder;
  onOpen: (folder: MediaFolder) => void;
  resolveUrl: (value?: string | null) => string;
}) {
  const previewSlots = getPreviewSlots(folder.preview_media);

  return (
    <button
      type="button"
      onClick={() => onOpen(folder)}
      className="group h-full rounded-3xl border border-slate-200 bg-white/90 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-ahc-green/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green/50"
    >
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        {previewSlots.some(Boolean) ? (
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-1">
            {previewSlots.map((slot, index) => (
              <div key={index} className="relative h-full w-full overflow-hidden rounded-lg bg-slate-200">
                {slot ? (
                  slot.type === "image" ? (
                    <img
                      src={resolveUrl(slot.thumb_url || slot.url)}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900/80 text-white">
                      {slot.type === "video" ? (
                        <Video className="h-6 w-6" />
                      ) : slot.type === "audio" ? (
                        <Music2 className="h-6 w-6" />
                      ) : (
                        <FileText className="h-6 w-6" />
                      )}
                    </div>
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/70">
                    <ImageIcon className="h-6 w-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">
            <Folder className="h-10 w-10" />
            <span className="text-xs font-medium uppercase tracking-wide">Empty</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40" />
      </div>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-slate-900">{folder.name}</p>
            {folder.description && (
              <p className="mt-1 line-clamp-2 text-xs text-slate-500">{folder.description}</p>
            )}
          </div>
          <span className="inline-flex h-8 items-center rounded-full bg-slate-100 px-3 text-xs font-medium text-slate-600">
            {folder.media_count} items
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{folder.children_count} subfolders</span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1 text-ahc-green">
            Open collection
            <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </button>
  );
}

function MediaTile({
  media,
  onClick,
  resolveUrl,
}: {
  media: MediaItem;
  onClick: () => void;
  resolveUrl: (value?: string | null) => string;
}) {
  const isImage = media.type === "image";
  const isVideo = media.type === "video";
  const isAudio = media.type === "audio";
  const previewUrl = resolveUrl(media.thumb_url || media.url);
  const mediaUrl = resolveUrl(media.url);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-ahc-green/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green/50"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        {isImage ? (
          <img
            src={previewUrl}
            alt={media.name || media.file_name || ""}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : isVideo ? (
          <video
            className="h-full w-full object-cover"
            src={mediaUrl}
            muted
            loop
            playsInline
          />
        ) : isAudio ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
            <Music2 className="h-8 w-8" />
            <span className="text-xs font-medium uppercase tracking-wide">Audio</span>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-200 text-slate-600">
            <FileText className="h-8 w-8" />
            <span className="text-xs font-medium uppercase tracking-wide">File</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0" />
      </div>

      <div className="space-y-2 p-4">
        <div>
          <p className="text-sm font-semibold text-slate-900 line-clamp-2">
            {media.name || media.file_name || "Untitled media"}
          </p>
          <p className="text-xs uppercase tracking-wide text-slate-400">{media.type}</p>
        </div>
        {media.caption && (
          <p className="text-xs text-slate-500 line-clamp-2">{media.caption}</p>
        )}
      </div>
    </button>
  );
}

function MediaPreviewModal({
  items,
  index,
  onClose,
  onPrev,
  onNext,
  resolveUrl,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  resolveUrl: (value?: string | null) => string;
}) {
  const item = items[index];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [portalNode] = useState(() => {
    if (typeof document === "undefined") {
      return null;
    }

    const element = document.createElement("div");
    element.className = "media-preview-modal";
    return element;
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    if (!portalNode) {
      return;
    }

    document.body.appendChild(portalNode);

    return () => {
      if (portalNode.parentNode) {
        portalNode.parentNode.removeChild(portalNode);
      }
    };
  }, [portalNode]);

  if (!item || !portalNode) {
    return null;
  }

  const resolvedMediaUrl = resolveUrl(item.url);
  const resolvedDisplayUrl = resolveUrl(item.thumb_url || item.url);
  const captionText = (item as any).caption || (item as any).description || (item as any).alt || (item as any).alt_text || "";

  const renderContent = () => {
    if (item.type === "image") {
      return (
        <img
          src={resolvedDisplayUrl || resolvedMediaUrl}
          alt={item.name || item.file_name || ""}
          className="max-h-[80vh] w-full object-contain"
        />
      );
    }

    if (item.type === "video") {
      return (
        <video
          src={resolvedMediaUrl}
          controls
          controlsList="nodownload"
          className="max-h-[80vh] w-full"
        />
      );
    }

    if (item.type === "audio") {
      return (
        <div className="flex w-full max-w-3xl flex-col items-center gap-6">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg">
            <Music2 className="h-16 w-16" />
          </div>
          <audio
            src={resolvedMediaUrl}
            controls
            controlsList="nodownload"
            className="w-full"
          />
        </div>
      );
    }

    return (
      <div className="flex min-h-[40vh] w-full flex-col items-center justify-center gap-4 bg-slate-100 p-10 text-center text-slate-600">
        <FileText className="h-12 w-12" />
        <p>Preview not available. Download to view the original file.</p>
        <a
          href={resolvedMediaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-ahc-green px-4 py-2 text-sm font-medium text-black shadow hover:bg-ahc-green/90"
        >
          Open file
        </a>
      </div>
    );
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex flex-1 items-center justify-center px-4 py-6 md:py-10">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          className="mr-6 hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:flex"
          aria-label="Previous media"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950/95 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          <div
            className="relative z-0 flex flex-1 items-center justify-center bg-neutral-950 p-4 sm:p-8"
            onTouchStart={(e) => {
              if (e.changedTouches && e.changedTouches.length > 0) {
                setTouchStartX(e.changedTouches[0].clientX);
                setTouchEndX(null);
              }
            }}
            onTouchMove={(e) => {
              if (e.changedTouches && e.changedTouches.length > 0) {
                setTouchEndX(e.changedTouches[0].clientX);
              }
            }}
            onTouchEnd={() => {
              if (touchStartX !== null && touchEndX !== null) {
                const dx = touchStartX - touchEndX;
                if (Math.abs(dx) > 50) {
                  if (dx > 0) onNext(); else onPrev();
                }
              }
              setTouchStartX(null);
              setTouchEndX(null);
            }}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className="absolute right-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:flex"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>
            {renderContent()}
            {captionText && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
                <div className="mx-4 mb-24 md:mb-4 rounded-lg bg-black/60 px-3 py-2 text-sm text-white shadow-lg">
                  {captionText}
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:block space-y-4 bg-white/95 p-6 shadow-inner">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1 text-slate-900">
                <h3 className="text-lg font-semibold">
                  {item.name || item.file_name || "Untitled media"}
                </h3>
                {captionText && <p className="text-sm text-slate-600">{captionText}</p>}
              </div>
              <div className="flex flex-col items-start gap-1 text-xs uppercase tracking-wide text-slate-500 sm:items-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  <ImageIcon className="h-4 w-4" />
                  {item.type}
                </span>
                <span>{item.mime_type}</span>
                {item.size && <span>{formatBytes(item.size)}</span>}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ID: {item.id}
                </span>
                {item.created_at && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Uploaded: {new Date(item.created_at).toLocaleString()}
                  </span>
                )}
              </div>
              <a
                href={resolvedMediaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ahc-green px-4 py-2 text-sm font-semibold text-black shadow hover:bg-ahc-green/90"
              >
                <FileText className="h-4 w-4" />
                Download original
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="ml-6 hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:flex"
          aria-label="Next media"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 px-4 py-3 bg-black/40 backdrop-blur-sm md:hidden">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          aria-label="Close preview"
        >
          <X className="h-6 w-6" />
        </button>
        <a
          href={resolvedMediaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 bg-white/5 px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
        >
          Download
        </a>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          className="flex-1 rounded-full border border-white/20 bg-white/5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="flex-1 rounded-full border border-white/20 bg-white/5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, portalNode);
}
