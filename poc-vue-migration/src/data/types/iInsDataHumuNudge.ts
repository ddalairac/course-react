export default interface iInsDataHumuNudge {
  insight_type: 'humu_nudge';

  // Header
  title_text: string;
  created_at: string;
  link_url: string // ribbon link

  // Body
  image_url: string
  image_alt: string
  summary_text: string

}
