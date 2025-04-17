import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Forex Trading Fundamentals',
    description: 'Learn the basics of forex trading, including currency pairs, market structure, and basic terminology.',
    price: 49.99,
    level: 'beginner',
    videoUrl: 'https://example.com/videos/forex-fundamentals',
    previewUrl: 'https://example.com/previews/forex-fundamentals',
    isAIGenerated: false,
    duration: '2h 30m',
    topics: ['Currency Pairs', 'Market Structure', 'Trading Sessions', 'Basic Terms']
  },
  {
    id: '2',
    title: 'Technical Analysis Mastery',
    description: 'Master technical analysis tools and indicators for better trading decisions.',
    price: 79.99,
    level: 'intermediate',
    videoUrl: 'https://example.com/videos/technical-analysis',
    previewUrl: 'https://example.com/previews/technical-analysis',
    isAIGenerated: false,
    duration: '4h 15m',
    topics: ['Chart Patterns', 'Indicators', 'Trend Analysis', 'Support & Resistance']
  },
  {
    id: '3',
    title: 'Risk Management Essentials',
    description: 'Learn essential risk management strategies to protect your trading capital.',
    price: 39.99,
    level: 'beginner',
    videoUrl: 'https://example.com/videos/risk-management',
    previewUrl: 'https://example.com/previews/risk-management',
    isAIGenerated: true,
    duration: '1h 45m',
    topics: ['Position Sizing', 'Stop Loss', 'Risk-Reward Ratio', 'Portfolio Management']
  },
  {
    id: '4',
    title: 'Advanced Trading Psychology',
    description: 'Master the psychological aspects of trading and develop a winning mindset.',
    price: 89.99,
    level: 'advanced',
    videoUrl: 'https://example.com/videos/trading-psychology',
    previewUrl: 'https://example.com/previews/trading-psychology',
    isAIGenerated: true,
    duration: '3h 20m',
    topics: ['Emotional Control', 'Trading Discipline', 'Mindset Development', 'Performance Analysis']
  },
  {
    id: '5',
    title: 'Price Action Trading',
    description: 'Learn to read and trade pure price action without indicators.',
    price: 69.99,
    level: 'intermediate',
    videoUrl: 'https://example.com/videos/price-action',
    previewUrl: 'https://example.com/previews/price-action',
    isAIGenerated: false,
    duration: '5h 00m',
    topics: ['Candlestick Patterns', 'Market Structure', 'Entry & Exit Strategies', 'Trade Management']
  }
]; 