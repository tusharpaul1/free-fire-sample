import React from 'react';
import { MOCK_LEADERBOARD } from '../constants';
import { Player } from '../types';

const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
    if (rank === 2) return 'bg-gray-400/20 text-gray-300 border-gray-400';
    if (rank === 3) return 'bg-orange-600/20 text-orange-400 border-orange-500';
    return 'bg-gray-800 border-gray-700';
}

const RankBadge: React.FC<{ rank: number }> = ({ rank }) => {
    const rankIcons = ['🏆', '🥈', '🥉'];
    return (
        <span className="font-bold text-lg">
            {rank <= 3 ? rankIcons[rank-1] : `#${rank}`}
        </span>
    );
}

export const LeaderboardPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Top Players</h1>
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-700">
                {MOCK_LEADERBOARD.map((player, index) => (
                    <li key={player.id} className={`flex items-center p-4 transition-colors duration-300 hover:bg-gray-700/50 ${getRankColor(index + 1)} border-l-4`}>
                        <div className="w-12 text-center">
                            <RankBadge rank={index + 1} />
                        </div>
                        <img src={player.avatarUrl} alt={player.username} className="w-12 h-12 rounded-full mx-4 border-2 border-gray-600"/>
                        <div className="flex-grow">
                            <p className="text-lg font-semibold text-white">{player.username}</p>
                            <p className="text-sm text-gray-400">Game ID: {player.gameId}</p>
                        </div>
                        <div className="hidden sm:flex space-x-8 text-center">
                            <div>
                                <p className="text-xs text-gray-400">K/D Ratio</p>
                                <p className="font-semibold text-white">{player.stats.kdRatio.toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Win Rate</p>
                                <p className="font-semibold text-white">{player.stats.winRate}%</p>
                            </div>
                             <div>
                                <p className="text-xs text-gray-400">Matches</p>
                                <p className="font-semibold text-white">{player.stats.matchesPlayed}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};
