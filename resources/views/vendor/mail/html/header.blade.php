@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="/images/misc/logo2.png">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
