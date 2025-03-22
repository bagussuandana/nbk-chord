const SoundCloudEmbed = ({ trackUrl }: { trackUrl: string }) => {
    return (
        <iframe
            width="100%"
            height="180"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                trackUrl
            )}`}
        ></iframe>
    );
};

export default SoundCloudEmbed;
