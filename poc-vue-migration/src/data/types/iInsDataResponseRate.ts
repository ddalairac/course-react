export default interface iInsDataResponseRate {
  insight_type: 'response_rate';
  // used for 'role_desc_text' color
  role_detail: 'admin' | 'manager';
  // used for rate color
  trend_detail: 'default' | 'trend_up' | 'trend_down' | 'no_info';

  // Header
  title_text: string // "Response Rate";
  role_desc_text: string; // "Company" or "Your team"
  survey_desc_text: string // "2022 Engagement Survey";
  created_at: string;

  // Body: text translations
  rate_header_text: string; // "Rate"
  rate_trend_text: string; // "vs last time"
  no_rate_text: string; // "Nothing to show yet"
  invited_text: string; // "invited"
  responded_text: string; // "responded"
  completed_text: string; // "completed"
  summary_title_text: string; // "room for growth"
  summary_body_text: string; // "Let's put in...."

  // Body: displayed data
  rate_value: number; // 80
  rate_delta_value: number; // 15
  rate_trend_value: number; // 65
  invited_value: number; // 19326
  responded_value: number; // 16548
  completed_value: number; // 15847

  // Footer
  link_text: string; // "View breakdown"
  link_url: string; // "https:///....."
}
