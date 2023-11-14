export default interface iInsDataEngagementScore {
  insight_type: 'engagement_score';

  // Header
  title_text: string; // Action plan follow up
  role_desc_text: string; // YOUR TEAM
  survey_desc_text: string; // 2022 ENGAGEMENT SURVEY
  created_at: string; // 2023-08-29 10:09:53

  // Body
  header_text: string; // Favorability
  favorable_text: string; // Favorable
  neutral_text: string; // Neutral
  unfavorable_text: string; // Unfavorable
  favorable: number; // 0.9
  neutral: number; // 0.1
  unfavorable: number; // 0
  trend_value?: number; // 0.7688172043010753
  delta_value?: number; // 0.13118279569892477
  trend_detail?: 'trend_up' | 'trend_down' | 'trend_neutral';
  company_name: string; // PYX Beta
  rate_trend_text?: string; // Company Overall Benchmark

  summary_title_text: string;
  summary_text: string;

  // Footer
  link_text: string;
  link_url: string;
}
