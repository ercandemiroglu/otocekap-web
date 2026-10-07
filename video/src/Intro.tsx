import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({frame, fps, config: {damping: 200}});
	const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {extrapolateRight: 'clamp'});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#121414',
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'system-ui, sans-serif',
			}}
		>
			<div style={{fontSize: 160, fontWeight: 800, color: '#E2E2E2', transform: `scale(${scale})`}}>
				Oto<span style={{color: '#2AE500'}}>Çekap</span>
			</div>
			<div style={{fontSize: 48, color: '#85967C', opacity: subtitleOpacity, marginTop: 24}}>
				otocekap.com
			</div>
		</AbsoluteFill>
	);
};
