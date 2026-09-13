export default function VideoSlot({
  youtubeId,
  title,
}: {
  youtubeId?: string;
  title: string;
}) {
  if (!youtubeId) return null;

  return (
    <div className="not-prose my-8 aspect-video w-full overflow-hidden border border-[var(--color-line)]">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
