export default interface iInsDataNoData {
  insight_type: 'no_data';

  // Header
  title_text: string;
  created_at: string;

  // Body
  summary_title_text: string;
  summary_text: string;

  // Footer
  link_text: string;
  link_url: string;
}
